<!DOCTYPE html>
<html lang="fa" id="html">
<head>
  <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <link rel="icon" href="data:;base64,=">
  <meta name="csrf-token" content="{{ csrf_token() }}" id="csrf">
  <title>@isset($pageTitle)
      {{$pageTitle}}
    @else
      پنل مدیریت
    @endif</title>
  <script src="{{asset("dashboard/js/jquery.min.js")}}"></script>
  <link rel="stylesheet" href="{{asset('dashboard/css/app.css')}}"/>
  {!! \App\Panel\UiHandler\StyleBuilder::build() !!}
  @yield('style')
  <link rel="stylesheet" href="{{asset('dashboard/css/admin-style.css?q='.rand(0,9999999999))}}"/>

  @if(getConfigurator()->useLivewire())
    {{--    <livewire:styles/>--}}
    @livewireStyles
  @endif

  @if(getConfigurator()->injectStylesFiles())
    @include(getConfigurator()->injectStylesFiles())
  @endif

  <style>
    .xx-dialog-cover {
      background: rgba(71, 71, 71, .3);
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 99909999;
    }

    .xx-dialog-cover .dialog .fa-times {
      cursor: pointer;
      position: absolute;
      left: 0;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }

    .xx-dialog-cover .dialog {
      width: 800px;
      height: 600px !important;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto auto;
      border-radius: 8px;
      background: #111;
      box-shadow: 0 0 7px 0 #222;
    }

    .xx-dialog-cover .dialog .dialog-header {
      height: 40px;
      border-bottom: 1px solid #666;
      line-height: 40px;
      padding: 0 8px;
    }

    .xx-dialog-cover .dialog .dialog-body {
      padding: 16px;
      overflow-y: auto;
      height: calc(100% - 60px);
    }

    .xx-dialog-cover .dialog .form-group {
      margin-top: 0;
    }

    .xx-dialog-cover .dialog label {
      line-height: 30px;
      margin-bottom: 0;
    }

    .xx-dialog-cover .dialog {
      height: 40px;

      line-height: 40px;
    }


  </style>


</head>


<body class="bg-theme {{\App\Panel\UiHandler\ThemeManager::getThemeClass()}}">


<div id="panel-version" data-version="{{PANEL_VERSION}}"></div>

@if(!isset($route))
    <?php $route = null; ?>
@endif


<div id="x-helpers"
     data-admin-prefix="{{getConfigurator()->prefix()}}"
     data-route="{{$route}}"
     data-user-id="{{user()->getId()}}"
     data-domain="{{env("APP_URL")}}"
     data-is-trash-mode="{{isTrashMode()}}"
     data-pusher-app-key="{{env("PUSHER_APP_KEY")}}"
     data-use-x-table="@isset($model){{$model::$xTable}}@endisset"
></div>


<div id="toast-helper"
     data-toast="{{getFlashAlert()}}"
></div>


<div id="wrapper" class="{{\App\Panel\UiHandler\NavigationMenu::getClass()}}">
  {!! \App\Panel\UiHandler\Menu\XMenu::render() !!}
  {!! \App\Panel\UiHandler\Header\XHeader::render() !!}
  {!! \App\Panel\UiHandler\XPopup::render() !!}

  <div class="content-wrapper" style="position: relative">

    <div class="loading-cover">
      <div id="loading"></div>
    </div>

    <div class="container-fluid" id="main-content" style="position: relative">

      @yield('content')
    </div>
  </div>
  <a href="javaScript:void(0);" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
  {!! \App\Panel\UiHandler\Footer\XFooter::render() !!}
</div>


{{--<script src="{{asset("dashboard/js/pusher.min.js")}}"></script>--}}

<script src="{{asset('dashboard/js/app.js')}}"></script>
{{--<script src="{{asset("dashboard/js/admin-main.js?q=".PANEL_VERSION)}}"></script>--}}
<script src="{{asset("dashboard/js/admin-main.js?q=".rand(0,9999999999))}}"></script>
{!! \App\Panel\UiHandler\ScriptBuilder::build() !!}

@if(getConfigurator()->useLivewire())
  @livewireScripts
@endif

@if(getConfigurator()->injectScripsFiles())
  @include(getConfigurator()->injectScripsFiles())
@endif


<script>
  var flashAlert = JSON.parse('{!! getFlashAlert() !!}');
  if (flashAlert["title"] != null) {
    Swal.fire({
      title: flashAlert["title"],
      type: flashAlert["kind"],
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'بسیار خب',
    }).then((result) => {
    });
  }


</script>



@yield('script')
@yield('custom')
@yield('noform')


<br>
<br>
<br>
<br>
<br>
<script>


  $(".hic-row").hover(function () {
    $(this).find(".sub-hint").addClass("active")
  }, function () {
    $(this).find(".sub-hint").removeClass("active")
  })


  $(document).on('change', function (event) {
    if ($(event.target).attr("id") == "x-font-awesome") {
      let fa = $(event.target).val()
      window.Livewire.emit("x-font-awesome-changed", fa)
    }
  })

  if (Notification.permission !== 'granted') {
    Notification.requestPermission()
  }

  function showNotification() {
    let title = "رویداد جدید داشبورد";
    let body = "شما یک رویداد جدید دارید لطفا داشبورد با باز کنید";
    new Notification(title, {body});
  }

</script>


</body>
</html>
