var quotes = [ "للمبرمج سلاحان: التفكير المنطقي والبحث",
               "تعلم البرمجة يشبه تعلم آلة موسيقية، لتحترفها يجب أن تتدرب عليها يومياً",
               "البرمجة هي الفهم",
               "علينا أن نطور قابليتنا على التعلم",
               "أفضل طريقة لتعلم لغة برمجية هو إستخدامها"
               ]

var i = Math.round(Math.random()*100)%quotes.length;

var temp = {
      template: '<p>'+quotes[i] +'</p>'
    }

var vm9 = new Vue({
    el: '#q',
    data: {

    },
    components: {
        'my-q': temp
    }
})