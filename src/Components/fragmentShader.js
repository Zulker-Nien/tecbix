const fragmentShader = `
varying vec2 vUv;

vec3 colorA = vec3(0.988,0,1);
vec3 colorB = vec3(0,0.859,0.871);



void main() { 
  vec2 normalizedPixel = gl_FragCoord.xy/2500.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);
  

  gl_FragColor =   vec4( vec3( color ), 1.0 );;
  
  
}

`;

export default fragmentShader;
