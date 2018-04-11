class Api::CommentsController < ApplicationController
    def index
        @comics = Comic.find(params[:comic_id])
        @comments = @comic.comments
        render json: {
            comments: @comments
        }
    end
    def show
        @comment = Comment.find(params[:id])
        render json: {
            comment: @comment
        }
    end
    def create
        @comic = Comic.find(params[:comic_id])
        @comment = @comic.commets.create(comment_params)
        render json: {
            comment: @comment
        }
    end
    def update
        @comic = Comic.find(params[:comment_id])
        @comment = @user.comments.find(params[:id])
        @comment.update!(comment_params)
        render json: {
            comment: @comment
        }
    end
    def destroy
        Comment.find(params[:id]).destroy
        render json: {
            message: "Destroyed"
        }
    end

    private



    def comments_params
        params.require(:comment).permit(:title, :text)
    end
end
