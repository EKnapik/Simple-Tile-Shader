void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    
    float col = mod(floor(6.0*uv.x) + floor(6.0*uv.y), 2.0);
	fragColor = vec4(vec3(col), 1.0);
}

/*
// Non compact version but same effect
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;
    // Scaling this because shadertoy has uv from 0.0->1.0
    float flipX = floor(4.0*uv.x);
    float flipY = floor(4.0*uv.y);
    float flip = mod(flipX + flipY, 2.0);
    fragColor = vec4(0.0);
    if(flip == 0.0) {
    	fragColor = vec4(1.0);
    }
}
*/
