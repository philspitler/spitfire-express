'use strict';

var express = require('express');
var router = express.Router();
var Spitfire = require('spitfire-mongo');

var api = function (database, environment, routerWithAddons) {
  var generateResources = environment !== 'production' ? true : undefined;
  var spitfire = new Spitfire(database, generateResources);
  router = routerWithAddons || router;

  // GET listing.
  router.get('/:resource', function (req, res) {
    spitfire.getResources(req.params.resource, function (docs) {
      res.json(docs);
    }, req.filter);
  });

  // GET nested listing.
  router.get('/:resource1/:id/:resource2', function (req, res) {
    spitfire.getNestedResources(req.params.resource1, req.params.id, req.params.resource2, function (docs) {
      res.json(docs);
    }, req.filter);
  });

  // GET document.
  router.get('/:resource/:id', function (req, res) {
    spitfire.getResource(req.params.resource, req.params.id, function (docs) {
      res.json(docs);
    }, req.filter);
  });

  // POST document.
  router.post('/:resource', function (req, res) {
    spitfire.createResource(req.params.resource, req.body, function (doc) {
      res.json(doc);
    });
  });

  // POST nested document
  router.post('/:resource1/:id/:resource2', function (req, res) {
    spitfire.createNestedResource(req.params.resource1, req.params.id, req.params.resource2, req.body, function (doc) {
      res.json(doc);
    });
  });

  // PUT document.
  router.put('/:resource/:id', function (req, res) {
    spitfire.updateResource(req.params.resource, req.params.id, req.body, function (doc) {
      res.json(doc);
    }, req.filter);
  });

  // DELETE document.
  router.delete('/:resource/:id', function (req, res) {
    spitfire.deleteResource(req.params.resource, req.params.id, function (doc) {
      res.json(doc);
    }, req.filter);
  });

  return router;
};
module.exports = api;
