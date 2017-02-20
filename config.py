# -*- coding=utf-8 -*-

import logging
from logging.handlers import RotatingFileHandler
class Config:
		SECRET_KEY = 'Giant-Arvin'
		SQLALCHEMY_COMMIT_ON_TEARDOWN = True
		SQLALCHEMY_TRACK_MODIFICATIONS = True

		@staticmethod
		def init_app(app):
			_handler = RotatingFileHandler(
				'app.log', maxBytes = 10000, backupCount = 1)
			_handler.setLevel(logging.WARNING)
			app.logger.addHandler(_handler)


class DevelopmentConfig(Config):
	SQLALCHEMY_DATABASE_URI = 'mysql://flask:Arvin-blog@127.0.0.1/flask-sql'


config = {
	'default': DevelopmentConfig
}