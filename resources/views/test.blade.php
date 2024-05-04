<style>
    body {
        margin: 0;
        height: 500px;
    }

    .ck.ck-editor {
        min-height: 500px !important;
    }
    .ck-editor__editable {
        min-height: 500px !important;
    }
</style>


<div id="text-container" style="display: none"></div>
<textarea name="" id="editor" cols="30" rows="10" style="height: 500px"></textarea>

<script src="{{asset("dashboard/js/ckeditor/ckeditor.js")}}"></script>
<script>
  setupEditor("editor")

  function setupEditor(id, locale = "fa") {
    CKEDITOR.config.language = locale;
    CKEDITOR.config.extraPlugins = ['uploadimage', 'html5video', 'html5audio', 'btgrid','prism'];
    let editor=CKEDITOR.replace(id)

    editor.on( 'instanceReady', function(event){
      if(event.editor.getCommand( 'maximize' ).state == CKEDITOR.TRISTATE_OFF);//ckeck if maximize is off
      event.editor.execCommand( 'maximize');
    });


  }

  CKEDITOR.instances.editor.on('change', function () {
    window.xxxData=CKEDITOR.instances.editor.getData()

    // document.getElementById("text-container").innerText =
  });
</script>
