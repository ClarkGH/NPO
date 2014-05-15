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
        $('a.login, a.edit, a.delete, a.create').on( 'click', this.getPartial.bind( this ) )
        $('#container').on('click', '.submit', this.submitPost.bind( this ) )
   },

    getAuthorPosts: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })
        ajaxRequest.done( this.postView.displayPost.bind( this.postView )  )
    },

    getPartial: function(){
        event.preventDefault()
        var ajaxRequest = $.ajax({
            url: event.target.href,
            type: 'GET'
        })

        ajaxRequest.done( this.postView.displayPartial )
    },

    transferTextToInputField: function(){
        var mediumContent = $('.editable').html()
        $('textarea[name="content"]').text( mediumContent )
    },

    submitPost: function(){
        event.preventDefault()
        this.transferTextToInputField()
        var ajaxRequest = $.ajax({
            url: event.target.form.action,
            type: 'POST',
            data: $('.post-form').serialize()
        })
        ajaxRequest.done( this.postView.displayPost.bind( this.postView) )
    }
}

function PostView(){
}

PostView.prototype = {
    getPostTemplate: function(){
        return $('#post-template').html()
    },

    displayPost: function( postData ){
        var mustacheData = { data: postData }
        var template = this.getPostTemplate()
        var rendered = Mustache.render( template, mustacheData )
        $('.content').html( rendered )
        this.parsePosts()
    },

    displayPartial: function( partial ){
        $('.content').html( partial )
        editor = new MediumEditor('.editable', {
            anchorInputPlaceholder: 'Type a link',
            buttons: ['bold', 'italic', 'quote'],
            diffLeft: 25,
            diffTop: 10,
            delay: 1000,
            targetBlank: true
        });
    },

    parsePosts: function(){
        var posts = $('.body')
        for( var i = 0, len = posts.length; i < len; i++ ){
            var post = posts[ i ]
            var elements = $.parseHTML( post.innerText )
            this.emptyPost( post )
            this.appendElements( elements, post )
        }
    },

    appendElements: function( elements, post ){
        for( var i = 0, len = elements.length; i < len; i++ ){
            $( post ).append( elements[ i ] )
        }
    },

    emptyPost: function( post ){
        $( post ).empty()
    }
}
