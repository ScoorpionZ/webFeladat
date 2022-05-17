<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teszt;

class TesztController extends Controller
{
    public function index()
    {
        return Teszt::with('kategoria')->get();
    }
}
