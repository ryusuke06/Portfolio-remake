Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:5000' ## <= 修正。*(ワイルドカード)でフルオープンにする。セキリュティガバガバ

    resource '*',
      headers: :any,
      #ログイントークンの許可
      expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end