<div>

  <style>
      .c-table {
          border-collapse: collapse;
          margin: auto;
      }

      .c-table, td, th {
          border: 1px solid #888;
      }

      .c-table {
          width: calc(100% - 16px);
          border-collapse: collapse;
      }
  </style>

  @if($show)
    <div class="cover" wire:click.self="dismiss">
      <div class="dialog">

        <div class="body" style="text-align: left;margin: 8px;display: flex;justify-content: space-between;border-bottom: 1px solid #888">
          <span style="line-height: 44px">
            تسک های ( {{$title}} )
          </span>
          <span wire:click="add" style="display: inline-block;width: 120px;height: 38px;background: #202e5b;text-align: center;line-height: 38px;border-radius: 8px;cursor: pointer">افزودن</span>
        </div>


        <table class="c-table table-bordered " style="margin-top: 16px">
          <tr>
            <td>عنوان</td>
            <td>عملیات</td>
          </tr>

          @foreach($records as $row)
            <tr>
              <td>{{$row["text"]}}</td>
              <td>
                <span>حذف کردن</span>
                <span>ویرایش</span>
              </td>
            </tr>
          @endforeach
        </table>

      </div>
    </div>
  @endif
</div>
