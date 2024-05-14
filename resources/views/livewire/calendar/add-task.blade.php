<div>
  @if($show)

    <style>
        select option {
            margin: 40px;
            background: #0E2338;
            color: #fff;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
        }


    </style>
    <div class="cover" wire:click.self="dismiss">
      <div class="dialog" style="width: 400px;height: 300px">
        <div class="header" style="line-height: 42px;height: 42px;border-bottom: 1px solid #888">افزودن تسک</div>


        <textarea wire:model="title" style="width: 92%;margin:8px auto;color: #fff;height: 120px;background: transparent;border-radius: 12px;padding:8px ;border: 1px solid #888;outline: none;"></textarea>



        <div>
          <select name="" id="" wire:model="mode" style="width: calc(92% + 16px);margin:8px auto;color: #fff;height: 38px;background: transparent;border-radius: 12px;padding:8px ;border: 1px solid #888;outline: none;">
            <option value="once">فقط در تاریخ ذکر شده</option>
{{--            <option value="monthly">ماهانه</option>--}}
{{--            <option value="yearly">سالانه</option>--}}
          </select>
        </div>


        <div>
          <span wire:click="done" style="width: 120px;height: 38px;background: #202e5b;display: inline-block;border-radius: 8px;cursor: pointer;line-height: 38px">تایید و ثبت</span>
        </div>


      </div>
    </div>
  @endif
</div>
