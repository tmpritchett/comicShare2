class Api::ComicsController < ApplicationController
    def index
        @users = User.find(params[:user_id])
        @comics = @user.comics
        render json: {
            comics: @comics
        }
    end
    def show
        @comic = Comic.find(params[:id])
        render json: {
            comic: @comic
        }
    end
    def create
        @user = User.find(params[:user_id])
        @comic = @user.comics.create(comic_params)
        render json: {
            comic: @comic
        }
    end
    def update
        @user = User.find(params[:user_id])
        @comic = @user.comics.find(params[:id])
        @comic.update!(comic_params)
        render json: {
            comic: @comic
        }
    end
    def destroy
        Comic.find(params[:id]).destroy
        render json: {
            message: "Destroyed"
        }
    end

    private



    def comics_params
        params.require(:comic).permit(:title, :description, :photo_url)
    end
end

