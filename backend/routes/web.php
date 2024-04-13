<?php

use App\Http\Controllers\Frontend\CategoryController;
use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\Frontend\OfferController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\ProductController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\OrderController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])->name('home');
Route::get('/category-list', [CategoryController::class, 'index'])->name('category.list');
Route::get('/products', [ProductController::class, 'index'])->name('products');
Route::get('/product/{slug}', [ProductController::class, 'show'])->name('product.show');
Route::get('/offers', [OfferController::class, 'index'])->name('offers');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/cart-list', [CartController::class, 'index'])->name('cart');
Route::get('/order-place', [OrderController::class, 'index'])->name('order.place');
