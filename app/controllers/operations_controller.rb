class OperationsController < ApplicationController
  include CableReady::Broadcaster

  def index
  end

  def default_content_type
    render_operation_success
  end

  def set_response_content_type
    response.content_type = Mime[:cable_ready]
    render_operation_success
  end

  def respond_to_block
    respond_to do |format|
      format.cable_ready do
        render_operation_success
      end
    end
  end

  def extra_simple_default_content_type
    render_extra_simple_operation("#extra_simple_fetch .default_content_type")
  end

  def extra_simple_set_response_content_type
    response.content_type = Mime[:cable_ready]
    render_extra_simple_operation("#extra_simple_fetch .set_response_content_type")
  end

  def extra_simple_respond_to_block
    respond_to do |format|
      format.cable_ready do
        render_extra_simple_operation("#extra_simple_fetch .respond_to_block")
      end
    end
  end

  private def render_operation_success
    render operations: cable_car.outer_html(params[:selector], html: "<span style=\"color: green\">success</span>")
  end

  private def render_extra_simple_operation(selector)
    render operations: cable_car.outer_html(selector, html: "<span style=\"color: green\">success</span>")
  end

end
