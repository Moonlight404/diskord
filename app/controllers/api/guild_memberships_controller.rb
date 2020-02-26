class Api::GuildMembershipsController < ApplicationController
  def create
    if params[:name] == "" || params[:name] == nil
      render json: ["This field is required"], status: 400
    else
      @guild = Guild.find_by(name: guild_membership_params[:name])
      if @guild
        @guild_membership = GuildMembership.new(member_id: guild_membership_params[:id], guild_id: @guild.id)
        if @guild_membership.save
          render :show
        else
          render json: ["Guild membership failed to save"], status: 400
        end
      else
        render json: ["Guild not found. Try a different guild name."]
      end
    end
  end

  def join_guild
    if params[:name] == "" || params[:name] == nil
      render json: ["This field is required"], status: 400
    else
      if current_member.nil?
        render json: ["Something is wrong with your session. Refresh and try again"], status: 400
      else
        @guild = Guild.find_by(name: params[:name])
        # // case insensitive search @guild = Guild.find('lower(name) = ?', params[:name].downcase).first_or_create
        if @guild
          @guild_membership = GuildMembership.new(member_id: current_member.id, guild_id: @guild.id)
          if @guild_membership.save
            redux_action = {
              type: "RECEIVE_GUILD_MEMBER",
              member: {
                id: current_member.id,
                username: current_member.username
              }
            }
            GuildChannel.send_data("guild_#{@guild_membership.guild_id}", redux_action.as_json)

            render 'api/guilds/show'
          else
            render json: ["Guild already joined!"], status: 400
          end
        else
          render json: ["Guild not found. Try a different guild name."], status: 404
        end
      end
    end
  end

  def show
    @guild_member = Member.find_by(id: params[:id])
    if @guild_member
      @guild_memberships = @guild_member.guilds.includes(:channels).to_a
      render :show
    else
      render json: ["No guild memberships found!"], status: 404
    end
  end

  def guild_members
    @guild = Guild.find_by(id: params[:id])
    if @guild
      @guild_members = @guild.guild_members.to_a.reduce({}) {|acc, el|
        acc[el.id] =  {
          id: el.id,
          username: el.username
        }
        acc
      }
      render json: @guild_members.as_json

      # render json: 'api/guilds/members'
      # @guild_members_array = @guild.guild_members.to_a
      # render 'api/guilds/member'
    else
      render json: ["Guild not found!"]
    end
  end

  private
  def guild_membership_params
    require(:guild_membership).permit(:member_id, :name)
  end
end
