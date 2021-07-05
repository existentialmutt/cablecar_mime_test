// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import Turbolinks from "turbolinks"
Turbolinks.start()

import CableReady from "cable_ready"

import mrujs from "mrujs"
mrujs.start()



async function requestOperations(path, {accept, section_id}) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content
  const headers = {"Content-Type": "application/json", "X-CSRF-TOKEN": csrfToken}
  if (accept) headers["Accept"] = accept


  const response = await fetch(
    `/operations/${path}`,
    {
      method: "POST",
      body: JSON.stringify({selector: `#${section_id} .${path}`}),
      headers: headers
    }
  )

  const json = await response.json()
  console.log(json)
  CableReady.perform(json)
}

requestOperations("default_content_type", {section_id: "default_accept"})
requestOperations("set_response_content_type", {section_id: "default_accept"})
requestOperations("respond_to_block", {section_id: "default_accept"})


requestOperations("default_content_type", {accept: "application/json", section_id: "accept_json"})
requestOperations("set_response_content_type", {accept: "application/json", section_id: "accept_json"})
requestOperations("respond_to_block", {accept: "application/json", section_id: "accept_json"})

requestOperations("default_content_type", {accept: "application/vnd.cable-ready.json", section_id: "accept_cable_ready"})
requestOperations("set_response_content_type", {accept: "application/vnd.cable-ready.json", section_id: "accept_cable_ready"})
requestOperations("respond_to_block", {accept: "application/vnd.cable-ready.json", section_id: "accept_cable_ready"})

requestOperations("default_content_type", {accept: "application/vnd.cable-ready.json, application/json", section_id: "accept_cable_ready_then_json"})
requestOperations("set_response_content_type", {accept: "application/vnd.cable-ready.json, application/json", section_id: "accept_cable_ready_then_json"})
requestOperations("respond_to_block", {accept: "application/vnd.cable-ready.json, application/json", section_id: "accept_cable_ready_then_json"})
