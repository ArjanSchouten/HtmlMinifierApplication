@extends('app')

@section('content')
    <div class="container">
        <form id="html-minify" action="{{route('minify.process')}}" method="POST">
            <div class="row">
                <div class="col-md-8">
                    <textarea class="col-md-12 form-control" id="html-input" placeholder="Your html..." v-model="html"></textarea>
                    <button id="html-submit" class="btn btn-success"  v-on="click: minifyHtml">Minify <i class="glyphicon glyphicon-chevron-right"></i></button>
                    <div id="minification-progres" class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0"
                             aria-valuemin="0" aria-valuemax="100" style="width:70%">
                            <span class="sr-only">70% Complete</span>
                        </div>
                    </div>
                    <textarea class="col-md-12 form-control" id="html-output" placeholder="Ouput html..." v-model="output" readonly></textarea>
                </div>
                <div id="minify-options" class="col-md-4">
                    @foreach($options as $option)
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"{{$option->isDefault()?' checked':''}} name="{{$option->getName()}}"/>
                                {{$option->getDescription()}}
                            </label>
                        </div>
                    @endforeach
                </div>
            </div>
        </form>
    </div>
@endsection
