<div {!! $additionalData !!} class="@if($view->col) {{$view->col}}  p0 @endif">


  <?php
  $value = null;
  $attachment = null;
  ?>
  @if(isEditMode())
      <?php
      $fillable = $object->name;


      if ($object->view->default) {
        $value = $object->view->default;
      } else {
        $value = $record->$fillable;
      }

      if (is_numeric($value)) {
        $attachment = \App\Panel\Models\Attachment::find($value);
      }
      ?>

  @else

      <?php

      if ($object->view->default) {
        $value = $object->view->default;
      }

      if (is_numeric($value)) {
        $attachment = \App\Panel\Models\Attachment::find($value);
      }

      ?>

  @endif


  <div style="background: rgba(71,71,71,.3);margin-top: 16px;padding: 16px">
    <label for="{{$name}}">{{$view->label}}</label>
    <input type="hidden" name="{{$name}}" id="attachment_{{$name}}"
           @if(isEditMode())value="{{@$attachment->id}}" @endif >
    <div class="tac">

      <div class="attachment-done_{{$name}}" style="width: 100%">

        @if($attachment instanceof \App\Panel\Models\Attachment)
          <div class="">
            <div class="attachment-row"
                 style="width: 100%;height: 200px;margin-top:16px">
              @if($attachment->getType()=="video")
                <video style="max-width: 100%" controls>
                  <source src="{{$attachment->getLink()}}" type="video/mp4">
                </video>
              @elseif($attachment->getType()=="image")
                <img src="{{$attachment->getLink()}}" alt=""
                     style="max-width: 100%">
              @endif
            </div>
          </div>
        @endif

      </div>

      <div style="margin-top: 32px">
        <span class="btn btn-success btn-sm" onclick="openAttachmentDialog('{{$name}}')">انتخاب پیوست</span>
        <span
          class="btn btn-danger btn-sm delete_attachment @if($attachment instanceof \App\Panel\Models\Attachment) active @endif  delete_attachment_{{$name}}"
          onclick="deleteAttachment('{{$name}}')">حذف پیوست</span>
      </div>

    </div>
  </div>

</div>
<div class="clearfix"></div>
@section("noform")

  <div>


    <div class="attachment-cover" style="overflow-y: auto">
      <div class="attachment-container">
        <div class="attachment-header">
        <span>
          افزودن پیوست
        </span>
          <i class="fa fa-times" onclick="closeDialog()"> </i>
        </div>

        <div class="upload-new">
          <form action="{{buildRoute("attachment-upload")}}" method="POST"
                enctype="multipart/form-data" id="form_{{$name}}">
            @csrf
            <div class="form-group">
              <div class="needsclick dropzone" id="document-dropzone">
              </div>
            </div>
          </form>
        </div>

        <div id="xxx_pagination" style="color: #222;text-align: center" dir="rtl">

        </div>

        <div class="attachment-body row">


        </div>

      </div>
    </div>


  </div>

@endsection


<script>

  function closeDialog() {
    $(".attachment-cover").removeClass("active")
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("attachment-cover")) {
      closeDialog()
    }
  })


  function openAttachmentDialog(name) {
    $(".attachment-cover").addClass("active")
    getDataFromServer(name)
  }

  function getDataFromServer(name, page = 1) {
    $.ajax({
      url: '{{buildRoute("attachments-dialog")}}',
      method: "POST",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      data: {
        page
      }
    }).done(response => {
      $(".attachment-body").html("")
      let container = $('.attachment-body')

      response.records.map(row => {
        addAttachmentRow(container, row, name)
      })

      let paginationContainer = document.getElementById("xxx_pagination")

      paginationContainer.innerText = ""

      if (!paginationContainer) {
        return;
      }


      if (response.lastPage === 1) {
        return;
      }

      for (let i = 1; i <= response.lastPage; i++) {

        if (response.currentPage - 3 > i) {
          continue
        }

        if (response.currentPage + 3 < i) {
          continue
        }

        let span = document.createElement("span")
        if (response.currentPage == i) {
          span.classList.add("active")
        }
        span.classList.add("pagination-item")
        span.addEventListener("click", function () {
          getDataFromServer(name, i)
        })
        span.innerText = i + ""
        paginationContainer.appendChild(span)

      }
    })
  }


  function deleteAttachment(name) {
    let result = document.getElementById("attachment_" + name)
    result.value = ""
    $(".attachment-done_" + name).empty()
    $(".delete_attachment_" + name).removeClass("active")
  }


  function addAttachmentRow(container, row, name) {
    let _row = JSON.stringify(row).replaceAll("\"", "\'")


    container.append(`<div class="col-md-3 col-lg-2 p-1">
          <div class="attachment-row" onclick="attachnentChoosed(${_row},'${name}')">
            ${row.type === "image" ? `<i class="fa fa-image"></i>` : ""}
            ${row.type === "video" ? `<i class="fa fa-video-camera"></i>` : ""}
            ${row.type === "audio" ? `<i class="fa fa-file-audio-o"></i>` : ""}
            ${row.type === "image" ? `<img  src="${row.link}" alt="" style="width: 98%;">` : ""}
            ${row.type === "video" ? `<video controlsList="nodownload" controls src="${row.link}" alt="" style="width: 98%;"></video>` : ""}
            ${row.type === "audio" ? `<audio  controlsList="nodownload" controls src="${row.link}" alt="" style="width: 80%;margin: 80px auto"></audio>` : ""}
          </div>
        </div>`)
  }


  function attachnentChoosed(row, name) {
    let result = document.getElementById("attachment_" + name)
    result.value = row.id

    $(".delete_attachment_" + name).addClass("active")

    $(".attachment-cover").removeClass("active")
    $(".attachment-done_" + name).html(
      `<div class="col-12">
          <div class="attachment-row" style="width: 100%;margin-top:16px;min-height: 200px">
            ${row.type === "image" ? `<i class="fa fa-image"></i>` : ""}
            ${row.type === "video" ? `<i class="fa fa-video-camera"></i>` : ""}
            ${row.type === "audio" ? `<i class="fa fa-file-audio-o"></i>` : ""}
            ${row.type === "image" ? `<img  src="${row.link}" alt="" style="width: 98%;">` : ""}
            ${row.type === "video" ? `<video controlsList="nodownload" controls src="${row.link}" alt="" style="width: 98%;"></video>` : ""}
            ${row.type === "audio" ? `<audio  controlsList="nodownload" controls src="${row.link}" alt="" style="width: 80%;margin: 80px auto"></audio>` : ""}
          </div>
        </div>`
    )
  }


</script>


<script>
  document.addEventListener("DOMContentLoaded", () => {
    var uploadedDocumentMap = {}
    Dropzone.options.documentDropzone = {
      url: '{{buildRoute("attachment-upload")}}',


      addRemoveLinks: true,
      headers: {
        'X-CSRF-TOKEN': "{{ csrf_token() }}",
        "upload-path": '{{$object->preSave->uploadPath}}',
        "model": "{{str_replace("\\","/",$model)}}"
      },
      success: function (file, response) {
        $('#form_{{$name}}').append('<input type="hidden" name="document[]" value="' + response.name + '">')
        uploadedDocumentMap[file.name] = response.name
        openAttachmentDialog('{{$name}}')
      },
      removedfile: function (file) {
        file.previewElement.remove()
        if (typeof file.file_name !== 'undefined') {
          name = file.file_name
        } else {
          name = uploadedDocumentMap[file.name]
        }
        $('#form_{{$name}}').find('input[name="document[]"][value="' + name + '"]').remove()
      },
      init: function () {
        @if(isset($project) && $project->document)
        var files = '{!! json_encode($project->document) !!}'

        for (var i in files) {
          var file = files[i]
          this.options.addedfile.call(this, file)
          file.previewElement.classList.add('dz-complete')
          $('#form_{{$name}}').append('<input type="hidden" name="document[]" value="' + file.file_name + '">')
        }
        @endif
      }
    }
  })


</script>












