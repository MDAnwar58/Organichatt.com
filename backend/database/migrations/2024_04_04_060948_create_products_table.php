<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('sub_category_id');
            $table->string('name', 50);
            $table->string('slug', 50);
            $table->string('sku', 50);
            $table->string('title', 50)->nullable();
            $table->string('price', 50)->nullable();
            $table->string('discount_price', 50)->nullable();
            $table->string('perchese_quantity', 50)->nullable();
            $table->string('available_quantity', 50)->nullable();
            $table->unsignedBigInteger('color_id');
            $table->unsignedBigInteger('size_id');
            $table->unsignedBigInteger('size_num_id');
            $table->unsignedBigInteger('weight_id');
            $table->enum('remark', ["End of Season", "Winter Sale", "Top Sales", "popular", "Flash Deal", "Rain Sale", "Hot Sale"])->nullable();
            $table->enum('refundable', ['yes', 'no']);
            $table->enum('status', ['publish', 'unpublish'])->default('publish');
            $table->longText('description')->nullable();
            $table->longText('specification')->nullable();
            $table->string('image_url')->nullable();

            // that's column for seo
            $table->string('meta_tag', 1000)->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
