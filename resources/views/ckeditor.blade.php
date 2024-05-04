<style>

    #cke_1_top {
        background: #1C2434 !important;
    }

    .cke_editable {
        background: #1C2434 !important;
    }
    body{
        margin: 0;
    }
</style>
<textarea name="" id="editor" cols="30" rows="10"></textarea>

<script src="{{asset("ckeditor/ckeditor.js")}}"></script>
<script>
  setupEditor("editor")

  function setupEditor(id, locale = "fa") {
    CKEDITOR.config.language = locale;
    CKEDITOR.config.extraPlugins = ['uploadimage', 'html5video', 'html5audio', 'btgrid'];
    window.editor = CKEDITOR.replace(id, {
      height: 300
    })

  }

  // CKEDITOR.instances.editor.on('change', function () {
  //   window.xxxData = CKEDITOR.instances.editor.getData()
  // });
</script>
