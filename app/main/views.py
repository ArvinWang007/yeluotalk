# -*- coding=utf-8 -*-

from . import main
from flask import jsonify, request, send_from_directory

@main.route('/')
def index():
	return 'Hello World'

@main.route('/static/<path:path>')
def data(path):
	# data = {
	# 	"text" : "你好，大熊君{{bb}} ！"
	# }
	# return jsonify(data)
	return send_from_directory('static', path)