# WindQuest データベース設計ドキュメント

このドキュメントは、TailwindCSS の学習アプリ「WindQuest」のデータベース構造を詳細に記述したものです。

## 目次

1. [ユーザー関連テーブル](#ユーザー関連テーブル)
2. [問題関連テーブル](#問題関連テーブル)
3. [ユーザー活動関連テーブル](#ユーザー活動関連テーブル)
4. [スキルツリー関連テーブル](#スキルツリー関連テーブル)
5. [コミュニティ関連テーブル](#コミュニティ関連テーブル)
6. [収益関連テーブル](#収益関連テーブル)
7. [認証連携設定](#認証連携設定)

## ユーザー関連テーブル

### users

ユーザーの基本情報を管理するテーブル

| カラム名   | データ型                 | 説明                   | デフォルト値 | NULL 許可 | 制約        |
| ---------- | ------------------------ | ---------------------- | ------------ | --------- | ----------- |
| id         | UUID                     | ユーザーの一意識別子   | auth.uid()   | NO        | PRIMARY KEY |
| username   | VARCHAR(255)             | ユーザー名             | -            | NO        | UNIQUE      |
| email      | VARCHAR(255)             | メールアドレス         | -            | NO        | UNIQUE      |
| avatar_url | TEXT                     | プロフィール画像の URL | -            | YES       | -           |
| created_at | TIMESTAMP WITH TIME ZONE | アカウント作成日時     | NOW()        | YES       | -           |
| updated_at | TIMESTAMP WITH TIME ZONE | 最終更新日時           | NOW()        | YES       | -           |
| last_login | TIMESTAMP WITH TIME ZONE | 最終ログイン日時       | -            | YES       | -           |

### user_profiles

ユーザーのプロフィール詳細情報を管理するテーブル

| カラム名           | データ型                 | 説明                       | デフォルト値      | NULL 許可 | 制約                   |
| ------------------ | ------------------------ | -------------------------- | ----------------- | --------- | ---------------------- |
| id                 | UUID                     | プロフィールの一意識別子   | gen_random_uuid() | NO        | PRIMARY KEY            |
| user_id            | UUID                     | 関連するユーザー ID        | -                 | NO        | FOREIGN KEY (users.id) |
| level              | INTEGER                  | ユーザーのレベル           | 1                 | NO        | -                      |
| xp                 | INTEGER                  | 獲得経験値                 | 0                 | NO        | -                      |
| streak_days        | INTEGER                  | 連続ログイン日数           | 0                 | NO        | -                      |
| last_activity_date | DATE                     | 最後にアクティブだった日付 | -                 | YES       | -                      |
| biography          | TEXT                     | 自己紹介文                 | -                 | YES       | -                      |
| created_at         | TIMESTAMP WITH TIME ZONE | 作成日時                   | NOW()             | YES       | -                      |
| updated_at         | TIMESTAMP WITH TIME ZONE | 最終更新日時               | NOW()             | YES       | -                      |

## 問題関連テーブル

### problem_categories

問題のカテゴリを定義するテーブル

| カラム名    | データ型                 | 説明                   | デフォルト値 | NULL 許可 | 制約        |
| ----------- | ------------------------ | ---------------------- | ------------ | --------- | ----------- |
| id          | SERIAL                   | カテゴリの一意識別子   | -            | NO        | PRIMARY KEY |
| name        | VARCHAR(255)             | カテゴリ名             | -            | NO        | UNIQUE      |
| description | TEXT                     | カテゴリの説明         | -            | YES       | -           |
| icon_url    | TEXT                     | カテゴリアイコンの URL | -            | YES       | -           |
| created_at  | TIMESTAMP WITH TIME ZONE | 作成日時               | NOW()        | YES       | -           |
| updated_at  | TIMESTAMP WITH TIME ZONE | 最終更新日時           | NOW()        | YES       | -           |

### problem_types

問題のタイプを定義するテーブル

| カラム名    | データ型                 | 説明               | デフォルト値 | NULL 許可 | 制約        |
| ----------- | ------------------------ | ------------------ | ------------ | --------- | ----------- |
| id          | SERIAL                   | タイプの一意識別子 | -            | NO        | PRIMARY KEY |
| name        | VARCHAR(255)             | タイプ名           | -            | NO        | UNIQUE      |
| description | TEXT                     | タイプの説明       | -            | YES       | -           |
| created_at  | TIMESTAMP WITH TIME ZONE | 作成日時           | NOW()        | YES       | -           |
| updated_at  | TIMESTAMP WITH TIME ZONE | 最終更新日時       | NOW()        | YES       | -           |

### problems

問題データを管理するメインテーブル

| カラム名          | データ型                 | 説明                                 | デフォルト値      | NULL 許可 | 制約                                                 |
| ----------------- | ------------------------ | ------------------------------------ | ----------------- | --------- | ---------------------------------------------------- |
| id                | UUID                     | 問題の一意識別子                     | gen_random_uuid() | NO        | PRIMARY KEY                                          |
| title             | VARCHAR(255)             | 問題のタイトル                       | -                 | NO        | -                                                    |
| description       | TEXT                     | 問題の説明                           | -                 | NO        | -                                                    |
| difficulty_level  | VARCHAR(50)              | 難易度（初級、中級、上級）           | -                 | NO        | CHECK (difficulty_level IN ('初級', '中級', '上級')) |
| category_id       | INTEGER                  | 関連するカテゴリ ID                  | -                 | NO        | FOREIGN KEY (problem_categories.id)                  |
| problem_type_id   | INTEGER                  | 関連する問題タイプ ID                | -                 | NO        | FOREIGN KEY (problem_types.id)                       |
| initial_code      | TEXT                     | 初期コード                           | -                 | YES       | -                                                    |
| solution_code     | TEXT                     | 解答例のコード                       | -                 | YES       | -                                                    |
| target_image_url  | TEXT                     | 目標とする完成イメージの URL         | -                 | YES       | -                                                    |
| hint              | TEXT                     | ヒント                               | -                 | YES       | -                                                    |
| xp_reward         | INTEGER                  | 解答時に獲得できる XP                | 10                | NO        | -                                                    |
| is_premium        | BOOLEAN                  | プレミアムコンテンツであるかのフラグ | false             | NO        | -                                                    |
| is_published      | BOOLEAN                  | 公開済みかのフラグ                   | false             | NO        | -                                                    |
| creator_id        | UUID                     | 作成者のユーザー ID                  | -                 | YES       | FOREIGN KEY (users.id)                               |
| is_user_generated | BOOLEAN                  | ユーザー生成コンテンツかのフラグ     | false             | NO        | -                                                    |
| created_at        | TIMESTAMP WITH TIME ZONE | 作成日時                             | NOW()             | YES       | -                                                    |
| updated_at        | TIMESTAMP WITH TIME ZONE | 最終更新日時                         | NOW()             | YES       | -                                                    |

## ユーザー活動関連テーブル

### user_problem_attempts

ユーザーの問題解答の試行履歴を管理するテーブル

| カラム名           | データ型                 | 説明                     | デフォルト値      | NULL 許可 | 制約                      |
| ------------------ | ------------------------ | ------------------------ | ----------------- | --------- | ------------------------- |
| id                 | UUID                     | 試行履歴の一意識別子     | gen_random_uuid() | NO        | PRIMARY KEY               |
| user_id            | UUID                     | ユーザー ID              | -                 | NO        | FOREIGN KEY (users.id)    |
| problem_id         | UUID                     | 問題 ID                  | -                 | NO        | FOREIGN KEY (problems.id) |
| user_code          | TEXT                     | ユーザーが提出したコード | -                 | YES       | -                         |
| is_solved          | BOOLEAN                  | 解決済みかのフラグ       | false             | NO        | -                         |
| attempts_count     | INTEGER                  | 試行回数                 | 1                 | NO        | -                         |
| xp_earned          | INTEGER                  | 獲得した経験値           | 0                 | NO        | -                         |
| time_spent_seconds | INTEGER                  | 解答に費やした時間（秒） | -                 | YES       | -                         |
| last_attempt_at    | TIMESTAMP WITH TIME ZONE | 最終試行日時             | NOW()             | YES       | -                         |
| created_at         | TIMESTAMP WITH TIME ZONE | 作成日時                 | NOW()             | YES       | -                         |
| updated_at         | TIMESTAMP WITH TIME ZONE | 最終更新日時             | NOW()             | YES       | -                         |

### achievements

アチーブメント（実績）を定義するテーブル

| カラム名    | データ型                 | 説明                         | デフォルト値 | NULL 許可 | 制約        |
| ----------- | ------------------------ | ---------------------------- | ------------ | --------- | ----------- |
| id          | SERIAL                   | アチーブメントの一意識別子   | -            | NO        | PRIMARY KEY |
| name        | VARCHAR(255)             | アチーブメント名             | -            | NO        | UNIQUE      |
| description | TEXT                     | アチーブメントの説明         | -            | NO        | -           |
| icon_url    | TEXT                     | アチーブメントアイコンの URL | -            | YES       | -           |
| xp_reward   | INTEGER                  | 獲得時に付与される XP        | 0            | NO        | -           |
| created_at  | TIMESTAMP WITH TIME ZONE | 作成日時                     | NOW()        | YES       | -           |
| updated_at  | TIMESTAMP WITH TIME ZONE | 最終更新日時                 | NOW()        | YES       | -           |

### user_achievements

ユーザーが獲得したアチーブメントを管理するテーブル

| カラム名       | データ型                 | 説明                               | デフォルト値      | NULL 許可 | 制約                          |
| -------------- | ------------------------ | ---------------------------------- | ----------------- | --------- | ----------------------------- |
| id             | UUID                     | ユーザーアチーブメントの一意識別子 | gen_random_uuid() | NO        | PRIMARY KEY                   |
| user_id        | UUID                     | ユーザー ID                        | -                 | NO        | FOREIGN KEY (users.id)        |
| achievement_id | INTEGER                  | アチーブメント ID                  | -                 | NO        | FOREIGN KEY (achievements.id) |
| achieved_at    | TIMESTAMP WITH TIME ZONE | 獲得日時                           | NOW()             | YES       | -                             |

## スキルツリー関連テーブル

### skill_tree_nodes

スキルツリーのノードを定義するテーブル

| カラム名       | データ型                 | 説明                                    | デフォルト値 | NULL 許可 | 制約                                |
| -------------- | ------------------------ | --------------------------------------- | ------------ | --------- | ----------------------------------- |
| id             | SERIAL                   | ノードの一意識別子                      | -            | NO        | PRIMARY KEY                         |
| name           | VARCHAR(255)             | ノード名（スキル名）                    | -            | NO        | -                                   |
| description    | TEXT                     | スキルの説明                            | -            | YES       | -                                   |
| icon_url       | TEXT                     | アイコンの URL                          | -            | YES       | -                                   |
| category_id    | INTEGER                  | 関連するカテゴリ ID                     | -            | YES       | FOREIGN KEY (problem_categories.id) |
| required_level | INTEGER                  | スキル解除に必要なレベル                | 1            | NO        | -                                   |
| parent_node_id | INTEGER                  | 親ノード ID（スキルツリーの階層構造用） | -            | YES       | FOREIGN KEY (skill_tree_nodes.id)   |
| created_at     | TIMESTAMP WITH TIME ZONE | 作成日時                                | NOW()        | YES       | -                                   |
| updated_at     | TIMESTAMP WITH TIME ZONE | 最終更新日時                            | NOW()        | YES       | -                                   |

### user_skills

ユーザーが解除したスキルを管理するテーブル

| カラム名      | データ型                 | 説明                       | デフォルト値      | NULL 許可 | 制約                              |
| ------------- | ------------------------ | -------------------------- | ----------------- | --------- | --------------------------------- |
| id            | UUID                     | ユーザースキルの一意識別子 | gen_random_uuid() | NO        | PRIMARY KEY                       |
| user_id       | UUID                     | ユーザー ID                | -                 | NO        | FOREIGN KEY (users.id)            |
| skill_node_id | INTEGER                  | スキルノード ID            | -                 | NO        | FOREIGN KEY (skill_tree_nodes.id) |
| unlocked_at   | TIMESTAMP WITH TIME ZONE | 解除日時                   | NOW()             | YES       | -                                 |

### node_problem_relations

スキルツリーノードと問題の関連付けを管理するテーブル

| カラム名      | データ型                 | 説明             | デフォルト値 | NULL 許可 | 制約                              |
| ------------- | ------------------------ | ---------------- | ------------ | --------- | --------------------------------- |
| id            | SERIAL                   | 関連の一意識別子 | -            | NO        | PRIMARY KEY                       |
| skill_node_id | INTEGER                  | スキルノード ID  | -            | NO        | FOREIGN KEY (skill_tree_nodes.id) |
| problem_id    | UUID                     | 問題 ID          | -            | NO        | FOREIGN KEY (problems.id)         |
| created_at    | TIMESTAMP WITH TIME ZONE | 作成日時         | NOW()        | YES       | -                                 |

## コミュニティ関連テーブル

### friendships

ユーザー間のフレンド関係を管理するテーブル

| カラム名   | データ型                 | 説明                     | デフォルト値      | NULL 許可 | 制約                                                             |
| ---------- | ------------------------ | ------------------------ | ----------------- | --------- | ---------------------------------------------------------------- |
| id         | UUID                     | フレンド関係の一意識別子 | gen_random_uuid() | NO        | PRIMARY KEY                                                      |
| user_id    | UUID                     | ユーザー ID              | -                 | NO        | FOREIGN KEY (users.id)                                           |
| friend_id  | UUID                     | フレンドのユーザー ID    | -                 | NO        | FOREIGN KEY (users.id)                                           |
| status     | VARCHAR(50)              | 関係のステータス         | -                 | NO        | CHECK (status IN ('pending', 'accepted', 'rejected', 'blocked')) |
| created_at | TIMESTAMP WITH TIME ZONE | 作成日時                 | NOW()             | YES       | -                                                                |
| updated_at | TIMESTAMP WITH TIME ZONE | 最終更新日時             | NOW()             | YES       | -                                                                |

### user_challenges

ユーザー間のチャレンジを管理するテーブル

| カラム名     | データ型                 | 説明                         | デフォルト値      | NULL 許可 | 制約                                                               |
| ------------ | ------------------------ | ---------------------------- | ----------------- | --------- | ------------------------------------------------------------------ |
| id           | UUID                     | チャレンジの一意識別子       | gen_random_uuid() | NO        | PRIMARY KEY                                                        |
| sender_id    | UUID                     | 送信者のユーザー ID          | -                 | NO        | FOREIGN KEY (users.id)                                             |
| recipient_id | UUID                     | 受信者のユーザー ID          | -                 | NO        | FOREIGN KEY (users.id)                                             |
| problem_id   | UUID                     | チャレンジに使用する問題 ID  | -                 | NO        | FOREIGN KEY (problems.id)                                          |
| message      | TEXT                     | チャレンジに添えるメッセージ | -                 | YES       | -                                                                  |
| status       | VARCHAR(50)              | チャレンジのステータス       | 'pending'         | NO        | CHECK (status IN ('pending', 'accepted', 'completed', 'rejected')) |
| created_at   | TIMESTAMP WITH TIME ZONE | 作成日時                     | NOW()             | YES       | -                                                                  |
| updated_at   | TIMESTAMP WITH TIME ZONE | 最終更新日時                 | NOW()             | YES       | -                                                                  |
| completed_at | TIMESTAMP WITH TIME ZONE | 完了日時                     | -                 | YES       | -                                                                  |

### user_generated_content_reviews

ユーザー生成コンテンツのレビューを管理するテーブル

| カラム名    | データ型                 | 説明                    | デフォルト値      | NULL 許可 | 制約                                                  |
| ----------- | ------------------------ | ----------------------- | ----------------- | --------- | ----------------------------------------------------- |
| id          | UUID                     | レビューの一意識別子    | gen_random_uuid() | NO        | PRIMARY KEY                                           |
| problem_id  | UUID                     | レビュー対象の問題 ID   | -                 | NO        | FOREIGN KEY (problems.id)                             |
| reviewer_id | UUID                     | レビュアーのユーザー ID | -                 | NO        | FOREIGN KEY (users.id)                                |
| status      | VARCHAR(50)              | レビューのステータス    | -                 | NO        | CHECK (status IN ('pending', 'approved', 'rejected')) |
| feedback    | TEXT                     | フィードバックコメント  | -                 | YES       | -                                                     |
| created_at  | TIMESTAMP WITH TIME ZONE | 作成日時                | NOW()             | YES       | -                                                     |
| updated_at  | TIMESTAMP WITH TIME ZONE | 最終更新日時            | NOW()             | YES       | -                                                     |

## 収益関連テーブル

### subscriptions

ユーザーのサブスクリプション情報を管理するテーブル

| カラム名       | データ型                 | 説明                           | デフォルト値      | NULL 許可 | 制約                                                                 |
| -------------- | ------------------------ | ------------------------------ | ----------------- | --------- | -------------------------------------------------------------------- |
| id             | UUID                     | サブスクリプションの一意識別子 | gen_random_uuid() | NO        | PRIMARY KEY                                                          |
| user_id        | UUID                     | ユーザー ID                    | -                 | NO        | FOREIGN KEY (users.id)                                               |
| plan_type      | VARCHAR(50)              | プランタイプ                   | -                 | NO        | CHECK (plan_type IN ('free', 'individual', 'education', 'business')) |
| status         | VARCHAR(50)              | サブスクリプションのステータス | -                 | NO        | CHECK (status IN ('active', 'canceled', 'expired'))                  |
| start_date     | TIMESTAMP WITH TIME ZONE | 開始日時                       | -                 | NO        | -                                                                    |
| end_date       | TIMESTAMP WITH TIME ZONE | 終了日時                       | -                 | YES       | -                                                                    |
| price_paid     | DECIMAL(10, 2)           | 支払い金額                     | -                 | NO        | -                                                                    |
| payment_method | VARCHAR(50)              | 支払い方法                     | -                 | YES       | -                                                                    |
| created_at     | TIMESTAMP WITH TIME ZONE | 作成日時                       | NOW()             | YES       | -                                                                    |
| updated_at     | TIMESTAMP WITH TIME ZONE | 最終更新日時                   | NOW()             | YES       | -                                                                    |

### payment_history

支払い履歴を管理するテーブル

| カラム名        | データ型                 | 説明                          | デフォルト値      | NULL 許可 | 制約                                                 |
| --------------- | ------------------------ | ----------------------------- | ----------------- | --------- | ---------------------------------------------------- |
| id              | UUID                     | 支払い履歴の一意識別子        | gen_random_uuid() | NO        | PRIMARY KEY                                          |
| user_id         | UUID                     | ユーザー ID                   | -                 | NO        | FOREIGN KEY (users.id)                               |
| subscription_id | UUID                     | 関連するサブスクリプション ID | -                 | YES       | FOREIGN KEY (subscriptions.id)                       |
| amount          | DECIMAL(10, 2)           | 支払い金額                    | -                 | NO        | -                                                    |
| currency        | VARCHAR(3)               | 通貨コード                    | 'USD'             | NO        | -                                                    |
| payment_method  | VARCHAR(50)              | 支払い方法                    | -                 | NO        | -                                                    |
| status          | VARCHAR(50)              | 支払いのステータス            | -                 | NO        | CHECK (status IN ('succeeded', 'pending', 'failed')) |
| payment_date    | TIMESTAMP WITH TIME ZONE | 支払い日時                    | -                 | NO        | -                                                    |
| created_at      | TIMESTAMP WITH TIME ZONE | 作成日時                      | NOW()             | YES       | -                                                    |

## 認証連携設定

Supabase の認証システムとアプリケーションデータベースを連携するための設定です。

### 自動ユーザー作成

新規ユーザーが Supabase 認証システムに登録されると、自動的に以下のテーブルにレコードが作成されます:

1. `users` テーブル - 基本的なユーザー情報
2. `user_profiles` テーブル - ユーザーのレベルや XP などの拡張情報

この連携は以下のトリガー関数で実現されています:

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (
    id,
    username,
    email,
    avatar_url,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', NEW.email),
    NEW.email,
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.created_at,
    NEW.updated_at
  );

  INSERT INTO public.user_profiles (
    user_id,
    level,
    xp,
    streak_days,
    created_at,
    updated_at
  ) VALUES (
    NEW.id,
    1,
    0,
    0,
    NEW.created_at,
    NEW.updated_at
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 行レベルセキュリティポリシー (RLS)

各ユーザーが自分のデータにのみアクセスできるよう、以下のような RLS ポリシーが設定されています:

#### users テーブル

```sql
-- ユーザーは自分のデータのみ閲覧可能
CREATE POLICY "ユーザーは自分のデータのみ閲覧可能" ON "users"
  FOR SELECT
  USING (auth.uid() = id);

-- ユーザーは自分のデータのみ更新可能
CREATE POLICY "ユーザーは自分のデータのみ更新可能" ON "users"
  FOR UPDATE
  USING (auth.uid() = id);
```

#### user_profiles テーブル

```sql
-- ユーザーは自分のプロフィールデータのみ閲覧可能
CREATE POLICY "ユーザーは自分のプロフィールデータのみ閲覧可能" ON "user_profiles"
  FOR SELECT
  USING (auth.uid() = user_id);

-- ユーザーは自分のプロフィールデータのみ更新可能
CREATE POLICY "ユーザーは自分のプロフィールデータのみ更新可能" ON "user_profiles"
  FOR UPDATE
  USING (auth.uid() = user_id);
```

この設定により、フロントエンドから Supabase クライアントを使用してユーザー登録やログインを行うだけで、自動的にアプリケーションのユーザーデータが作成・更新され、セキュアにアクセス制御されます。
