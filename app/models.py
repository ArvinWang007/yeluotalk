from . import db, login_manager
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


# 创建article和tag的多对多关系表
article_tag = db.Table('article_tag',
						db.Column('article_id', db.Integer, db.ForeignKey('articles.id')),
						db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'))
						)



class Article(db.Model):
	__tablename__ = 'articles'
	id = db.Column(db.Integer, primary_key = True)
	titile = db.Column(db.String(64), unique = True)
	body = db.Column(db.Text)
	create_time = db.Column(db.DATETIME, default = datetime.utcnow())
	category_id = db.Column(db.Integer, db.ForeignKey('categorys.id'))
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
	tags = db.relationship('Tag', 
							secondary = article_tag,
							backref = db.backref('articles'))



class Category(db.Model):
	__tablename__ = 'categorys'
	id = db.Column(db.Integer, primary_key = True)
	name = db.Column(db.String(64), unique = True)
	articles = db.relationship('Article', backref = 'category')


class User(db.Model, UserMixin):
	__tablename__ = 'users'
	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(64), unique = True)
	password_hash = db.Column(db.String(128))
	real_name = db.Column(db.String(64), unique = True)
	articles = db.relationship('Article', backref = 'user')

	@property
	def password(self):
		raise AttributeError(u'密码属性不正确')

	@password.setter
	def password(self, password):
		self.password_hash = generate_password_hash(password)

	def verify_password(self, password):
		return check_password_hash(self.password_hash, password)

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(int(user_id))

class Tag(db.Model):
	__tablename__ = 'tags'
	id = db.Column(db.Integer, primary_key = True)
	tag_name = db.Column(db.String(64), unique = True)


