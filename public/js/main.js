$('#form').submit(function(event) {
    event.preventDefault();

    // Revisa la documentacion oficial de Google Recaptcha V3 en https://developers.google.com/recaptcha/docs/v3 y configura tu cuenta para obetener tu reCAPTCHA_site_key y tu secret_key
    grecaptcha.ready(function() {
        grecaptcha.execute('reCAPTCHA_site_key', {action: 'subscribe_newsletter'}).then(function(token) {
            console.log('aqui', token);
            let secret = 'secret_key';
            let url = "https://www.google.com/recaptcha/api/siteverify?secret="+secret+"&response="+token;
            $.post(url, function(data){
                console.log(data.score);
                document.getElementById('puntuacion').innerHTML=data.score;
            });
        });;
    });
});