class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: {
            users: @users
        }
    end
    def show
        @user= User.find(params[:id])
        @comics = @user.comics
        render json: {
            user: @user,
            comics: @comics
        }
    end
    def update
        @updated_user = User.find(params[:id])
        @updated_user.update!(user_params)
        render json: {
            user: @updated_user
        }
    end
    def create
        @new_user = User.create(user_params)
        render json: {
            user: @new_user
        }
    end
    def destroy
        User.find(params[:id]).destroy
        render json: {
            message: "User destroyed"
        }
    end

    private

    def user_params
        params.require(:user).permit(:name, :email)
    end
end
