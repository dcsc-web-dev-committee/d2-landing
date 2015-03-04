(function(ShuntDiv){
    shunter = new ShuntDiv(document.getElementById('content'), [
        new ShuntDiv.Transition('video', 'about', 'dualAnimateCss', 'keypress', {
                key: 40,
                exit_animation_name: 'slideOutUp',
                enter_animation_name: 'slideInUp',
                exit_animation_function: 'ease-out',
                enter_animation_function: 'ease-out',
            }),   
        new ShuntDiv.Transition('about', 'video', 'dualAnimateCss', 'keypress', {
                key: 38,
                exit_animation_name: 'slideOutDown',
                enter_animation_name: 'slideInDown',
                exit_animation_function: 'ease-out',
                enter_animation_function: 'ease-out',
            }),
    ], {
        default: 'video',
        saveWithHash: true,
    });
})(ShuntDiv);
