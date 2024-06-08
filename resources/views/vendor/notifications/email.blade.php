<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>ایمیل بازیابی</title>
</head>
<body>

<div class="container" dir="rtl">
    <div class="card card-primary mt-4" >


        <div class="card-header">
            <div style="font-size: 24px;text-align: center">
                <span style="color: #06B6D4">Li</span><span style="color: #D4418A">Master</span>
            </div>
        </div>

        <div class="card-body">

            <div style="text-align: right;font-size: 22px;font-weight: bold">
                سلام!
            </div>
            <div style="margin-top: 4px">
                شما این ایمیل را دریافت کرده اید. زیرا ما یک درخواست بازنشانی رمز عبور برای حساب شما ارسال کرده ایم.
            </div>

            <div style="text-align: center;margin-top: 16px">
            <a href="{{$actionUrl}}" class="btn btn-success" style="background: #2d3748;border: 1px solid #2d3748;line-height: 24px">
                <span style="position: relative;top: -4px;color: #fff;border: none;text-decoration: none">بازیابی رمز عبور</span>
            </a>
            </div>

            <div style="margin-top: 16px">
                لطفا این لینک را در اختیار دیگران قرار ندهید
            </div>

            {{--            <x-mail::button :url="$actionUrl" :color="$color">--}}
            {{--                {{ $actionText }}--}}
            {{--            </x-mail::button>--}}

            <hr>
            <div style="text-align: left">
                <a href="{{$actionUrl}}" style="cursor: pointer;color: #1e5a9a;text-decoration: none;border-bottom: 1px dashed #1e5a9a">
                    {!! $actionUrl !!}
                </a>
            </div>

        </div>


        <div class="card-footer" style="display: flex;justify-content: space-between">
            <span>لای مستر</span>
            <a href="https://limaster.ir" target="_blank" style="cursor: pointer;color: #222;text-decoration: none;border-bottom: 1px dashed #222">limaster.ir</a>
        </div>


    </div>



</div>

</body>
</html>
