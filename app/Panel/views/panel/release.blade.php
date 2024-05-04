@extends('layouts.main')

@section('style')
  <style>
    .views{
      text-align: center;
    }
    .views .row {
      width: 200px;
      height: 60px;
      line-height: 50px;
      background: rgba(71, 71, 71, .3);
      border-radius: 4px;
      font-size: 13px;
      display: inline-block;
      margin-right: 20px;
      padding: 4px;
    }
  </style>
@endsection

@section('content')
  <?php
  use App\Panel\Features\Online\XOnlineDetect;
  $uniqueUsers = XOnlineDetect::getUniqueUsers();
  $onlineUsers = XOnlineDetect::getOnlineUsers();
  $requestsCount = XOnlineDetect::getXRequestsCount();
  $userRegisteredCount = XOnlineDetect::getTodayUsers();


  ?>
  <div class="views">
    <div class="row">
      <span>تعداد کاربر یونیک :</span>
      <span>{{number_format($uniqueUsers)}}</span>
    </div>

    <div class="row">
      <span>تعداد کاربران آنلاین : </span>
      <span>{{number_format($onlineUsers)}}</span>
    </div>


    <div class="row">
      <span>تعداد درخواست ها : </span>
      <span>{{number_format($requestsCount)}}</span>
    </div>

    <div class="row">
      <span>تعداد کاربر های امروز : </span>
      <span>{{number_format($userRegisteredCount)}}</span>
    </div>
  </div>

  <hr>


  <div>
    <h4>آخرین کاربر ها</h4>
    <table class="table table-bordered">
      <tr>
        <th>نام</th>
        <th>نام کاربری</th>
        <th>تاریخ ثبت نام</th>
      </tr>

      @foreach(\App\Models\User::latest()->limit(10)->get() as $user)
      <tr>
        <th>{{$user->name}}</th>
        <th>{{$user->email}}</th>
        <th>{{\App\Panel\helpers\XDateHelper::convertToJalali($user->created_at,"Y/m/d H:i:s")}}</th>
      </tr>
      @endforeach
    </table>
  </div>



@endsection


