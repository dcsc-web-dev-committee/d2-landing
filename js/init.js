(function(ShuntDiv){
    shunter = new ShuntDiv(document.getElementById('content'), [
        new ShuntDiv.Transition('video', 'about', 'dualAnimateCss', 'keypress', {
                key: 40,
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),   
        new ShuntDiv.Transition('about', 'video', 'dualAnimateCss', 'keypress', {
                key: 38,
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),

        new ShuntDiv.Transition('video', 'about', 'dualAnimateCss', 'click', {
                id: 'down',
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),   
        new ShuntDiv.Transition('about', 'video', 'dualAnimateCss', 'click', {
                id: 'up',
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),

        new ShuntDiv.Transition('video', 'about', 'dualAnimateCss', 'touchSwipe', {
                swipe: 'up',
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),   
        new ShuntDiv.Transition('about', 'video', 'dualAnimateCss', 'touchSwipe', {
                swipe: 'down',
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),

        new ShuntDiv.Transition('about', 'subscribe', 'dualAnimateCss', 'keypress', {
                key: 40,
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),
        new ShuntDiv.Transition('subscribe', 'about', 'dualAnimateCss', 'keypress', {
                key: 38,
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),

        new ShuntDiv.Transition('about', 'subscribe', 'dualAnimateCss', 'click', {
                id: 'down',
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),
        new ShuntDiv.Transition('subscribe', 'about', 'dualAnimateCss', 'click', {
                id: 'up',
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),

        new ShuntDiv.Transition('about', 'subscribe', 'dualAnimateCss', 'touchSwipe', {
                swipe: 'up',
                exit_animation_name: 'fadeOutUp',
                enter_animation_name: 'fadeInUp',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),
        new ShuntDiv.Transition('subscribe', 'about', 'dualAnimateCss', 'touchSwipe', {
                swipe: 'down',
                exit_animation_name: 'fadeOutDown',
                enter_animation_name: 'fadeInDown',
                exit_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
                enter_animation_function: 'cubic-bezier(.08,.98,.86,.99)',
            }),
    ], {
        default: 'video',
        saveWithHash: true,
        onTransition: function() {
            if (!!(video = document.getElementById('video-elem')))
                video.play();
        },
    });
})(ShuntDiv);
