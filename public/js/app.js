$(document).ready( function(){
    var postView = new PostView()
    var blog = new Blog( postView )
    blog.bindEventListeners()
})

function Blog( postView ) {
    this.postView = postView
}

Blog.prototype = {
    bindEventListeners: function(){
        $('.deena, .jennifer, .rachel').on( 'click', this.getAuthorPosts.bind( this ) )
   },

    getAuthorPosts: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })
        ajaxRequest.done( this.getPostTemplate.bind( this )  )
    },

    getPostTemplate: function( data ){
        var self = this
        var ajaxRequest = $.ajax({
            url: 'templates/post_template.mst',
            type: 'GET'
        })
        ajaxRequest.done( function( template ){ self.postView.displayPost( template, data ) } )
    }
}

function PostView(){
}

PostView.prototype = {
    displayPost: function( template, data ){
        var rendered = Mustache.render( template, data[0] )
        $('.container').html( rendered )
    }
}
