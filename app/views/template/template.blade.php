@section('template-css')
{{--css--}}
{{-- You can use the bottom way or do URL::asset('css/bootstrap.min.css')--}}
{{HTML::style('assets/css/bootstrap-3.1.1-dist/css/bootstrap.min.css')}}
    {{HTML::style('assets/css/styles.css')}}
@stop

@section('template-meta')
<meta charset = "utf-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
    <meta name = "viewport" content = "width=device-width, intial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta http-equiv="MSThemeCompatible" Content="No"/>
    <meta name="MSSmartTagsPreventParsing" content="true"/>
    <meta http-equiv="imagetoolbar" content="no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=8"/>
    <meta name="keywords" content="William Tang, Georgia State University, Computer Science"/>
    <meta name="description" content= "William Tang - Georgia State Student, College of Arts and Science"/>
    <meta name="author" content= "William Tang"/>
@stop


@section('template-navigation')
{{--navigation--}}
  <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <a class="{{Request::is('/') ? 'blog-nav-item active' : 'blog-nav-item'}}" href="{{Request::is('/') ? '#' : '/'}}">Home</a>
          <a class="{{Request::is('about') ? 'blog-nav-item active' : 'blog-nav-item'}}" href="{{Request::is('about') ? '#' : 'about'}}">About</a>
          <a class="{{Request::is('projects') ? 'blog-nav-item active' : 'blog-nav-item'}}" href="{{Request::is('projects') ? '#' : 'projects'}}">Projects</a>
          <a class="{{Request::is('contact') ? 'blog-nav-item active' : 'blog-nav-item'}}" href="{{Request::is('contact') ? '#' : 'contact'}}">Contact</a>
        </nav>
      </div>
    </div>
@stop 


@section('template-body-open')
  {{--<div class="row">
      <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
      </div>--}}
<div class="row">
      <div class="col-lg-8 col-md-offset-2">    
@stop

@section('template-body-close')
    </div>
    </div>
@stop


@section('template-body')
  @yield('template-body-open')
  
  @yield('template-body-close')
@stop




