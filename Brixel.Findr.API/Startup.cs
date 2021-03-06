using Brixel.Findr.API.Infrastructure.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace Brixel.Findr.API
{
    using Infrastructure.Notifications;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
                options.AddDefaultPolicy(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

            services.AddScoped<IFileSystem, FileSystem>();
            services.AddScoped<IGameRepository, GameRepository>();

            services.AddSignalR();

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc($"v1", new OpenApiInfo()
                {
                    Version = "v1",
                    Title = "Brixel.Findr",
                    Description = "Findr of Brixel"
                });
                options.DocumentFilter<AdditionalParametersDocumentFilter>();

            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseSwagger();
            app.UseSwaggerUI(c =>
                c.SwaggerEndpoint($"/swagger/v1/swagger.json", "Brixel.FindrApi"));

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapHub<GameHub>("/hub");
                endpoints.MapControllers();
            });
        }
    }
}
