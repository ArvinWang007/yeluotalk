# -*- coding=utf-8 -*-

import logging
from logging.handlers import RotatingFileHandler
class Config:
		SECRET_KEY = 'Yeluotalk123'
		SQLALCHEMY_COMMIT_ON_TEARDOWN = True
		SQLALCHEMY_TRACK_MODIFICATIONS = True

		@staticmethod
		def init_app(app):
			_handler = RotatingFileHandler(
				'app.log', maxBytes = 10000, backupCount = 1)
			_handler.setLevel(logging.WARNING)
			app.logger.addHandler(_handler)


class DevelopmentConfig(Config):
	SQLALCHEMY_DATABASE_URI = 'mysql://root:yeluotalk@localhost/data'


config = {
	'default': DevelopmentConfig
}