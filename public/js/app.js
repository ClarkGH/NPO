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
        $('.deena').on( 'click', this.getDeenaPosts.bind( this ) )
        $('.jenn').on( 'click', this.getJennPosts.bind( this ) )
        $('.rachel').on( 'click', this.getRachelPosts.bind( this ) )
   },

    getDeenaPosts: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })

        //ajaxRequest.done( console.log( data ) )
    },

    getJennPosts: function(){},

    getRachelPosts: function(){}
}

function PostView(){
}

PostView.prototype = {
    displayDeenaPosts: function(){
        event.preventDefault()
        console.log('deena')
    },

    displayJennPosts: function(){
        event.preventDefault()
        console.log('jenn')
    },

    displayRachelPosts: function(){
        event.preventDefault()
        console.log('rachel')
    }
}
