<div>
    <h1>Be present above all else. - Naval Ravikant </h1>
    <form action="{{ route('contact2-submit') }}" method="POST"> 
        @csrf
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="steps">step:</label><br>
        <input type="number" id="steps" name="steps" required><br>
        <input type="submit" value="Submit">
    </form>
</div>


<div class="{{ isset($userOne) ? 'display:' . $userOne->display : 'display:none' }}">
    {{-- @if (isset($data['steps']))
  your steps   {{ $data['steps']  }} in km {{ $totalsteps->getStepsToKm($data['steps'])}}
@else
    hello@example.com
@endif --}}

@if (!empty($data['steps']))
     @dump($data)
    Hi {{ $data['name'] }} Your Total steps are {{ $data['steps'] }} converted in kilometers {{ $data['steps']  * 0.74}} km
    {{-- in km {{ $totalsteps->getStepsToKm(1) }} --}}
@else
    No steps data available
@endif



</div>