# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_31_191046) do

  create_table "assessments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "test_id"
    t.integer "rate", default: 0
    t.text "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.index ["test_id"], name: "index_assessments_on_test_id"
    t.index ["user_id"], name: "index_assessments_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "details", force: :cascade do |t|
    t.integer "test_id"
    t.text "question"
    t.string "first_answer"
    t.string "second_answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "position"
    t.index ["test_id"], name: "index_details_on_test_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id"
    t.integer "test_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["test_id"], name: "index_favorites_on_test_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "inquiries", force: :cascade do |t|
    t.integer "user_id"
    t.string "title"
    t.text "content"
    t.integer "demand"
    t.integer "read", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_inquiries_on_user_id"
  end

  create_table "results", force: :cascade do |t|
    t.integer "test_id"
    t.string "title"
    t.text "caption"
    t.string "youtube_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "patterns"
    t.integer "position"
    t.index ["test_id"], name: "index_results_on_test_id"
  end

  create_table "tests", force: :cascade do |t|
    t.integer "category_id"
    t.string "title"
    t.text "caption"
    t.boolean "disclose", default: false
    t.string "image_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "impressions_count", default: 0
    t.index ["category_id"], name: "index_tests_on_category_id"
  end

end
