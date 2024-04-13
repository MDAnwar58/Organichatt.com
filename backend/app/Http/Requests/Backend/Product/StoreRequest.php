<?php

namespace App\Http\Requests\Backend\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'brand_id' => 'nullable',
            'category_id' => 'required',
            'sub_category_id' => 'nullable',
            'name' => 'required',
            'title' => 'required',
            'price' => 'required',
            'discount_price' => 'nullable',
            'perchese_quantity' => 'required',
            'available_quantity' => 'required',
            'color_id' => 'nullable',
            'size_id' => 'nullable',
            'size_num_id' => 'nullable',
            'weight_id' => 'nullable',
            'remark' => 'required',
            'refundable' => 'required',
            'status' => 'required',
            'description' => 'required',
            'specification' => 'required',
            'image_url' => 'required',
            'meta_tag' => 'required',
            'meta_title' => 'required',
            'meta_description' => 'required',
        ];
    }
}
