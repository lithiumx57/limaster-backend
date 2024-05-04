<div class="form-group btn-group col-md-8">
  @foreach($buttons as $button)
    <button class="{{$button->classes}}" id="{{$button->id}}">
      <i class="{{$button->icon}}"></i>
      {{$button->text}}
    </button>
  @endforeach
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    $("#save-button-and-back").click(function () {
      var tag = $("#main-form");
      var url = tag.attr('action')
      if (url.includes("?")) {
        url += "&with-back-url=true";
      } else {
        url += "?with-back-url=true"
      }
      tag.attr("action", url)
      tag.submit();
    })

    $("#cancel-button").click(function () {

      let helper = document.getElementById("x-helpers")
      let domain = helper.getAttribute("data-domain")

      var link = '{{url()->previous()}}'
      link = link.replace(domain, "")

      const myEvent = new CustomEvent("AJAX_GO_TO_URL", {

        detail: {
          target: link
        }
      });

      document.dispatchEvent(myEvent);
    })

  })
</script>
