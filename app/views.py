# -*- coding=utf-8 -*-

from . import main
import jsonify

@main.route('/')
def index():
	return 'Hello World'