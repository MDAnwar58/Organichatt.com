<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(): View
    {
        return view('pages.products.products');
    }
    public function show($slug): View
    {
        return view('pages.product-details.product-details');
    }
}
