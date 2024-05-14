<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'/>

  @livewireStyles

  <link href='{{asset("app/full-calendar/css/fonts.css")}}' rel='stylesheet'/>
  <link href='{{asset("app/full-calendar/css/fullcalendar.css")}}' rel='stylesheet'/>
  <link href='{{asset("app/full-calendar/css/fullcalendar.print.min.css")}}' rel='stylesheet' media='print'/>
  <script src='{{asset("app/full-calendar/js/moment.min.js")}}'></script>
  <script src='{{asset("app/full-calendar/js/moment-jalaali.js")}}'></script>
  <script src='{{asset("app/full-calendar/js/jquery.min.js")}}'></script>
  <script src='{{asset("app/full-calendar/js/jquery-ui.min.js")}}'></script>
  <script src='{{asset("app/full-calendar/js/fullcalendar.min.js")}}'></script>
  <script src='{{asset("app/full-calendar/js/fa.js")}}'></script>

  <script src="{{asset("app/sa.js")}}"></script>

  <style>
      body {
          /*background: #111826;*/
          color: #fff;
      }

      .fc-unthemed td.fc-today {
          background: #122d60;
      }

      .fc-button {
          background: #314165;
          color: #fff;
      }

      .swal2-container {
          z-index: 9999999999999;
      }

      * {
          font-family: "Iran", sans-serif;
      }
  </style>
  <style>
      .cover {
          display: block;
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto auto;
          width: 100%;
          height: 100%;
          background: rgba(71, 71, 71, .3);
          z-index: 8988
      }

      .dialog {
          position: absolute;
          left: 0;
          right: 0;
          top: -80px;
          bottom: 0;
          margin: auto auto;
          width: 800px;
          height: 600px;
          background: #0E2338;
          border-radius: 8px;
      }
  </style>
  @livewireScripts

  <script>


    window.Livewire.on("show-toast-message", function (message) {
      Swal.fire({
        text: message[0].message,
        icon: message[0].type,
        confirmButtonText: 'بسیار خب'
      })
    })

    $(document).ready(function () {
      init()
    });


    window.Livewire.on("refresh-calendar", function () {
      $('#calendar').fullCalendar('destroy');
      // $("#calendar").fullCalendar("rerenderEvents");
      init()

    })


    function init() {
      var overlayBox = ``;
      $('#wrap').append(overlayBox);

      $('body').on('click', '.overlay-close', function () {
        $('.overlay').removeClass('active');
      });
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        locale: 'fa',
        isJalaali: true,
        isRTL: true,
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
          window.Livewire.dispatch("showCalendarSelect", {start: start, end: end})
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: "/calendar/get-events?token={{$user->token}}"
      });

    }

  </script>
  <style>

      #calendar {
          max-width: 1600px;
          margin: 0 auto;
      }

  </style>
</head>
<body>
<div id='wrap'>


  <div id='calendar'></div>

  <livewire:calendar.calendar :user="$user"/>
  <livewire:calendar.add-task :user="$user"/>

</div>


</body>
</html>
