Name
Chat-Space

This was created during my time as a student in TECH CAMP


Database
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|index: true, null: false, unique: true|
|e-mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|string|null: false, unique: true|

### Association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|text||
|image|string||
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
