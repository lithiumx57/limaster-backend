<?php

namespace App\Models;

use App\Helpers\UserDataTrait;
use App\Models\ProjectManagement\Project;
use App\Panel\Models\Role;
use App\Panel\Models\XUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;

/**
 * @property $id
 * @property $name
 * @property $token
 * @property $email
 * @property $data
 * @property Collection<Role> $roles
 * @property $password
 * @property $created_at
 * @property $updated_at
 */
class User extends XUser
{
  use HasFactory, Notifiable, UserDataTrait;

  public static array $customPermissions = [
    'can-change-user-permission' => "تغییر سطح دسترسی کاربر"
  ];


  protected function casts(): array
  {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
      "data" => "array"
    ];
  }


  public function fields(): array
  {
    $data = [
      xField()->string("name")->showInTable()->maxFilter(30)->minFilter(2),
      xField()->email("email")->showInTable()->ltr()->uniqueFilter("users")->showInTable(),
      xField()->password("password")->label("کلمه عبور")->label("کلمه عبور")->maxFilter(8)->maxFilter(50)->canView()->updateNotRequired(),
      xField()->bool("is_admin")->nullable()->switchable()->label("کاربر ادمین"),
    ];

    if (xHasPermission("can-change-user-permission")) {
      $data[] = xField()->manyToMany('roles', Role::class, "name")->label("دسترسی ها")->nullable()->showInTable();
    }
    return $data;
  }

  public static function getUsernameField(): string
  {
    return "email";
  }

  public function roles(): BelongsToMany
  {
    return $this->belongsToMany(Role::class);
  }

  public function getAvatar(): string
  {
    return  $this->getData("profile,avatar,200", getDefaultAvatar());
  }


  public function isAdmin(): bool
  {
    return $this->is_admin;
  }


  public function projects(): HasMany
  {
    return $this->hasMany(Project::class);
  }


}

