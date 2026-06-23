<?php

namespace App\Objects;

use Illuminate\Support\Str;
use JsonSerializable;
use Stringable;

class Route implements JsonSerializable, Stringable
{
    /**
     * Create a new class instance.
     */
    private function __construct(
        public readonly string $name,
        public readonly string $url,
        public readonly string $label,
    ) {}

    public static function fromIlluminateRoute(\Illuminate\Routing\Route $route, ?string $label = null): self
    {
        $name = $route->getName();
        $label ??= Str::headline($name);

        return new self($name, $route->uri(), $label);
    }

    public static function fromCurrent(?string $label = null): self
    {
        $route = \Illuminate\Support\Facades\Route::current();

        return self::fromIlluminateRoute($route, $label);
    }

    public function __toString(): string
    {
        return $this->name;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'name' => $this->name,
            'url' => $this->url,
            'label' => $this->label,
        ];
    }
}
