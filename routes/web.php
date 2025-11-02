<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
Route::get('/example', function () {
    return Inertia::render('Example');
})->name('example');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('welcome');

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/projects/{id}', function ($id) {
    return Inertia::render('ProjectDetail', [
        'id' => (int) $id,
    ]);
})->name('projects.show');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    return Inertia::render('BlogDetail', [
        'slug' => $slug,
    ]);
})->name('blog.show');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/settings.php';
