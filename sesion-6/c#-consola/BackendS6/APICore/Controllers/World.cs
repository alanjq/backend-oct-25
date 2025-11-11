using Ejemplo1;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class World : ControllerBase
    {
        // GET: api/<World>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<World>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            ConexionBD c = new ConexionBD();
            return "value";
        }

        // POST api/<World>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<World>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<World>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
