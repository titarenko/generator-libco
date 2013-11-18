should = require "should"
sinon = require "sinon"
<%= name %> = require "../../modules/<%= name %>"

describe "<%= name %>", ->

	describe "#getSenseOfLife()", ->
		
		it "should return sense of life", (done) ->
			instance = new <%= name %>
			instance.getSenseOfLife().should.eql 42
			done()
