Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' ## <= 修正。* でフルオープンにする。セキリュティガバガバ

    resource '*',
      headers: :any,
      #ログイントークンの許可
      expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end