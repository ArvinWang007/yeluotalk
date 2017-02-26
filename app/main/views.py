# -*- coding=utf-8 -*-

from . import main
from flask import jsonify, request, send_from_directory, render_template, url_for

@main.route('/')
def index():
	return render_template('index.html')

@main.route('/<path>')
def example(path):
	return render_template(path)

# @main.route('/static/<path:path>')
# def data(path):
# 	# data = {
# 	# 	"text" : "你好，大熊君{{bb}} ！"
# 	# }
# 	# return jsonify(data)
# 	return send_from_directory('static', path)