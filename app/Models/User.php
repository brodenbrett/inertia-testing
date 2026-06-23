<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Laravel\Fortify\Contracts\PasskeyUser;
use Laravel\Fortify\PasskeyAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticatable;

/**
 * @property int $id
 * @property string $uuid
 * @property string $name
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property Carbon|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */
#[Fillable(['uuid', 'name', 'email', 'password'])]
#[Hidden(['id', 'password', 'two_factor_secret', 'two_factor_recovery_codes', 'remember_token'])]
class User extends Authenticatable implements PasskeyUser
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, PasskeyAuthenticatable, TwoFactorAuthenticatable;

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    /**
     * Filter a query with a LIKE operation on the given columns.
     */
    public function scopeSearch(
        Builder $query,
        ?string $search_term,
        string|array $columns
    ): Builder {
        return $query->when($search_term, function ($query) use ($columns, $search_term) {
            $query->where(function ($query) use ($columns, $search_term) {
                foreach ((array) $columns as $column) {
                    $query->orWhereLike($column, '%'.$search_term.'%');
                }
            });
        });
    }

    /**
     * Filter a query with a FULLTEXT search on the given columns.
     */
    public function scopeFullTextSearch(
        Builder $query,
        ?string $search_term,
        string|array $columns
    ): Builder {
        return $query->when($search_term, function ($query) use ($columns, $search_term) {
            $query->where(function ($query) use ($columns, $search_term) {
                foreach ((array) $columns as $column) {
                    $query->orWhereFullText($column, $search_term);
                }
            });
        });
    }
}
